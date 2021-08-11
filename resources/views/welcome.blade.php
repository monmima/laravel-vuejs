<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>
<body>
    <div id="app">
        <ul>
            <li>
                <router-link to="/home" class="nav-router-link">Accueil</router-link>
            </li>
            <li>
                <router-link to="/tasks" class="nav-router-link">tasks</router-link>
            </li>
        </ul>

    </div>

    <div class="container">
        <router-view></router-view>
    </div>



    <script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
