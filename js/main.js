$(function(){
  'use strict';

  let s=localStorage;

  let root = document.documentElement;
  // root.style.setProperty('--my-color', 200);

  let arr_color={
    color1:210,
    color2:60,
    color3:130,
    color4:0,
  };

  $('#color-setting').on('click','.color-1',function(){
    root.style.setProperty('--my-color', arr_color.color1);
  });

  $('#color-setting').on('click','.color-2',function(){
    root.style.setProperty('--my-color', arr_color.color2);
  });

  $('#color-setting').on('click','.color-3',function(){
    root.style.setProperty('--my-color', arr_color.color3);
  });

  $('#color-setting').on('click','.color-4',function(){
    root.style.setProperty('--my-color', arr_color.color4);
  });

  for(let i=0;i<s.length;i++){
    let li=$('#todo_template').clone();
    li.attr('data-id', s.key(i));
    li.find('.todo_title').text(s.getItem(s.key(i)));
    li.removeAttr('id');
    $('#todos').prepend(li);
  }

  //create
  $('#new_todo_form').on('submit',function(e){
    e.preventDefault();
    let title=$('#todo_new').val();
    if(title===""){
      return;
    }
    let max_number=s.key(0);
    for(let i=1;i<s.length;i++){
      if (s.key(i)>max_number){
        max_number=s.key(i);
      }
    }
    max_number++;
    s.setItem(max_number,title);
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
      s.removeItem(id);
      window.location.reload();
    }
  });

  $('#allclaer').on('click',function(){
    s.clear();
    window.location.reload();
  })

});
