# 📦 Repositorio de Proyectos con TypeScript

## 📖 Acerca de este Repositorio
Este repositorio contiene **dos proyectos de TypeScript** construidos con fines educativos.  
Cada proyecto se enfoca en la **integración con servicios externos** a través del consumo de APIs y la automatización de procesos, demostrando el uso de herramientas modernas en el desarrollo de aplicaciones.

---

## 1️⃣ Proyecto **Axios PokeAPI**

### 📝 Descripción
Este proyecto es una **aplicación de línea de comandos** que se conecta a la **PokeAPI** para obtener información de Pokémon.  
Su objetivo principal es enseñar a realizar **llamadas asíncronas a APIs externas** y manejar los datos que devuelven.

### ⚙️ Tecnologías Clave
- **TypeScript** → Tipado estático para un desarrollo más robusto.  
- **Axios** → Librería para realizar peticiones HTTP de manera eficiente.  
- **Interfaces** → Definidas para tipar la estructura de los datos de la API, garantizando seguridad en el código.  
- **Async/Await** → Manejo de operaciones asíncronas de forma más legible y limpia.  

### 🚀 Funcionalidad
La aplicación obtiene datos de un **Pokémon aleatorio** y muestra información detallada como:  
- Nombre  
- ID  
- Habilidades principales  

---

## 2️⃣ Proyecto **TechLetter**

### 📝 Descripción
Este proyecto es un **servicio de automatización** que actúa como un boletín informativo de noticias tecnológicas.  
Cada día, un **cron job** se ejecuta para obtener las noticias más recientes desde **NewsAPI** y enviarlas por correo electrónico a un destinatario.

### ⚙️ Tecnologías Clave
- **TypeScript** → Para la lógica del servidor y tipificación.  
- **Axios** → Consumo de la API de noticias.  
- **node-cron** → Programación de tareas automáticas (cron jobs).  
- **Nodemailer** → Envío de correos electrónicos de forma sencilla.  
- **Express.js (opcional)** → Para configurar el servidor que aloja el servicio de cron job.  

### 🚀 Funcionalidad
El servicio **automatiza la recopilación y distribución de noticias**, demostrando cómo:  
- Integrar APIs externas  
- Procesar datos obtenidos  
- Enviar notificaciones por correo electrónico  
- Ejecutar tareas programadas automáticamente  

---

## 🎯 Objetivo General
Ambos proyectos buscan **fortalecer habilidades en Node.js y TypeScript**, enfocándose en:  
- Consumo de APIs externas  
- Manejo de datos asincrónicos  
- Automatización de procesos con cron jobs  
- Integración con servicios externos como correos electrónicos  


# *Proyecto principa TechLetter*