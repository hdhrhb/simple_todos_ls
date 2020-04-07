<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@hidehiroqt" />
  <meta property="og:url" content="https://simple-todo-ls.herokuapp.com/" />
  <meta property="og:title" content="シンプルタスク管理ツール " />
  <meta property="og:description" content="[Webサービス]ログインなしで使用できるシンプルなタスク管理ツールです" />
  <meta property="og:image" content="https://simple-todo-ls.herokuapp.com/img/icatch.png" />
  <title>シンプルタスク管理ツール</title>
	<link rel="stylesheet" href="./css/styles.css">
</head>
<body>
  <div id="container">

    <h1>Simple Todos</h1>
    <div id="container-head">
      <p id="color-setting">
        <span class="color-1"></span>
        <span class="color-2"></span>
        <span class="color-3"></span>
        <span class="color-4"></span>
      </p>
    </div>
    <form action="submit" id="new_todo_form">
      <input id="todo_new" type="text" placeholder="Todoを入力してEnterキー">
    </form>
    <ul id="todos" class="test">
      <li id="todo_template" data-id="">
        <input type="checkbox" class="update_todo">
        <span class="todo_title"></span>
        <div class="delete_todo">x</div>
      </li>
    </ul>
    <div id="allclaer">タスク全削除</div>
    <div id="expression">ローカルストレージを使用してます。同じブラウザを使用してる間はデータが保持されます。色ボタンをクリックするとテーマカラーが変更できます。</div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="./js/main.js"></script>
</body>
producted by<p style="text-align:center;"><a href="https://hidehiroblog.com">ヒデログ</a></p
</html>
