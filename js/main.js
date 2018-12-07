$(function(){
  'use strict';

  const PREKEY='simple-task-';

  let s=localStorage;

  let root = document.documentElement;

  let arr_color={
    color1:210,
    color2:60,
    color3:130,
    color4:0,
  };

  // s.setItem('simple-task-1','task1');
  // s.setItem('simple-task-2','task2');

  function chageColor(color){
    root.style.setProperty('--my-color', color);
  }

  $('#color-setting').on('click','.color-1',function(){
    chageColor(arr_color.color1);
  });

  $('#color-setting').on('click','.color-2',function(){
    chageColor(arr_color.color2);
  });

  $('#color-setting').on('click','.color-3',function(){
    chageColor(arr_color.color3);
  });

  $('#color-setting').on('click','.color-4',function(){
    chageColor(arr_color.color4);
  });

  function judgeTask(key){
    if (key.length>12) {
      if(key.substr(0,12)===PREKEY){
        return true;
      }
    }
    return false;
  }

  function getNumberFromKey(key){
    return key.substr(12,key.length-12);
  }

  //現在のタスクをローカルストレージから取得して表示
  let id;
  for(let i=0;i<s.length;i++){
    let li=$('#todo_template').clone();

    if (judgeTask(s.key(i))){
      id=getNumberFromKey(s.key(i));
      li.attr('data-id', id);
      li.find('.todo_title').text(s.getItem(s.key(i)));
      li.removeAttr('id');
      $('#todos').prepend(li);
    }
  }

  //create
  $('#new_todo_form').on('submit',function(e){
    e.preventDefault();
    let title=$('#todo_new').val();
    if(title===""){
      return;
    }

    let max_number=0;
    let tmp_number;
    for(let i=0;i<s.length;i++){
      if (judgeTask(s.key(i))){
        tmp_number=getNumberFromKey(s.key(i));
        if (tmp_number>max_number){
          max_number=tmp_number;
        }
      }
    }
    max_number++;
    s.setItem(PREKEY + max_number,title);
    let li=$('#todo_template').clone();
    li.attr('data-id', max_number);
    li.find('.todo_title').text(title);
    li.removeAttr('id');
    $('#todos').prepend(li);
    $('#todo_new').val("");
  });

  //update_todo
  $('#todos').on('click','.update_todo',function(){
    let li=$(this).parents('li');
    if (li.find('.todo_title').hasClass('done')){
      li.find('.todo_title').removeClass('done');
    }else{
      li.find('.todo_title').addClass('done');
    }
  });

  //delete
  $('#todos').on('click','.delete_todo',function(){
    let id=$(this).parents('li').data('id');
    let done_flag=$(this).parents('li').children().hasClass('done');
    let confirm_flag;
    if(done_flag){
      confirm_flag = true;
    }else{
      confirm_flag = confirm('タスクを削除しますか？');
    }
    if(confirm_flag){
      s.removeItem(PREKEY+id);
      window.location.reload();
    }
  });

  //clear all
  $('#allclaer').on('click',function(){
    for(let ls in s){
      if(judgeTask(ls)){
        s.removeItem(PREKEY+getNumberFromKey(ls));
      }
    }
    window.location.reload();
  })
});
