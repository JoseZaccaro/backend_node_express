/*
* Crear estructura de carpetas del proyecto
* Hacer npm init / npm init -y
* Configurar package.json
* Instalar dependencias
    ? lista de dependencias
        * express
        * cors
        * dotenv
        * mongoose (Solo para luego utilizar mongoDB)
    !~!
* Configurar servidor
    ? Configuración del servidor paso a paso
        * Crear server.js / index.js
        * Importar el modulo de express y las demas dependencias. 
        * Importar las configuraciones ya sea de base de datos o env entre otros.
        * Crear una variable que contenga una instancia de express que será nuestro servidor (ej: let app = express(); )
        * Definir el puerto del servidor utilizando el metodo set por ejemplo: app.set("port", port); 
        * donde port sin comillas es una variable donde se normalizó el puerto dependiendo si está en producción o de forma local
        * Definir el host en caso de que exista sino localhost. 
        * Aplicar los middlewares para las peticiones generales, alias middlewares de aplicación.
        * Definir la/s carpeta/s estaticas, para luego poder acceder a las mismas desde la url.
            TODO En caso de utilizar vistas definir la carpeta estatica y el template engine. por ejemplo de la siguiente manera:
                ? app.set("views", path.join(__dirname, "views"));
                ? app.set("view engine", "ejs");
            ! Nota: deben importar "path" de node y tener instalado el engine.
        * Definir la ruta inicial de la API / Router 
        * Por ultimo hacemos que el servidor nos escuche con por ej: app.listen(port, host, ()=> console.log("App listening on port " + port + " on " + host) )
    !~!

* Configurar el Router
    ? Configuracion del Router
        * En un archivo routes/index.js importamos express
        * Creamos una variable const router = express.Router(); donde tendremos la instancia de nuestro router principal.
        * A ese router le definimos nuestras rutas principales, las cuales dependen de nuestras necesidades y le pasamos el router de esa ruta, el cual contiene las rutas a los controladores de esa utilidad de la API.
            *por ej: router.route("/auth", authRouter);
        * Exportamos el router y lo utilizamos en la ruta inicial de nuestra API.
            * Los demás routers tienen la misma estructura, pero estos llaman a middlewares o controladores y no a más routers a menos que sea necesario.
        !~!
    * 


















*/