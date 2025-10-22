# 📧 Configuración de EmailJS para el Portafolio

## Pasos para configurar el envío de correos electrónicos

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar servicio de email
1. En el dashboard, ve a **Email Services**
2. Click en **Add New Service**
3. Selecciona **Gmail** (recomendado)
4. Conecta tu cuenta de Gmail: `osmanbarahona2020@gmail.com`
5. Copia el **Service ID** generado

### 3. Crear template de email
1. Ve a **Email Templates**
2. Click en **Create New Template**
3. Usa este template:

```
Subject: Nuevo mensaje desde tu portafolio - {{subject}}

Hola Osman,

Has recibido un nuevo mensaje desde tu portafolio web:

Nombre: {{from_name}}
Email: {{from_email}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Enviado desde tu portafolio web
```

4. Guarda el template y copia el **Template ID**

### 4. Obtener Public Key
1. Ve a **Account** → **General**
2. Copia tu **Public Key**

### 5. Actualizar el código
En el archivo `script.js`, reemplaza estos valores:

```javascript
// Línea 427
emailjs.init("TU_PUBLIC_KEY_AQUI");

// Línea 479
await emailjs.send("TU_SERVICE_ID_AQUI", "TU_TEMPLATE_ID_AQUI", templateParams)
```

### 6. Ejemplo de configuración completa
```javascript
// Initialize EmailJS
(function() {
  emailjs.init("user_abc123def456"); // Tu Public Key
})();

// En el envío del email
await emailjs.send("service_gmail123", "template_portfolio456", templateParams)
```

## 🔧 Configuración alternativa con Netlify Forms

Si prefieres no usar EmailJS, puedes usar Netlify Forms:

### 1. Agregar atributos al formulario
```html
<form class="contact-form glass-card" id="contact-form" 
      name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
```

### 2. Agregar campo oculto
```html
<input type="hidden" name="form-name" value="contact" />
<p class="hidden">
  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
</p>
```

### 3. Configurar en Netlify
1. Sube tu sitio a Netlify
2. Ve a **Forms** en el dashboard
3. Los emails llegarán automáticamente a tu email configurado

## 📱 Notificaciones de prueba

Una vez configurado, puedes probar el formulario:
1. Abre tu portafolio en el navegador
2. Ve a la sección de contacto
3. Llena el formulario
4. Verifica que recibas el email

## 🚨 Solución de problemas

### Error: "EmailJS is not defined"
- Verifica que el script de EmailJS esté cargado
- Revisa la consola del navegador para errores

### Error: "Invalid service ID"
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo

### Error: "Invalid template ID"
- Verifica que el Template ID sea correcto
- Asegúrate de que el template esté publicado

### No llegan emails
- Revisa la carpeta de spam
- Verifica que el email de destino sea correcto
- Revisa los logs en EmailJS dashboard

## 💡 Consejos adicionales

1. **Límites gratuitos**: EmailJS permite 200 emails/mes gratis
2. **Seguridad**: Nunca expongas tu Private Key en el frontend
3. **Testing**: Usa emails de prueba antes de hacer deploy
4. **Backup**: Considera tener un método alternativo de contacto

## 📞 Contacto de emergencia

Si tienes problemas con la configuración, puedes:
1. Revisar la documentación oficial de EmailJS
2. Contactar soporte de EmailJS
3. Usar el método alternativo con Netlify Forms
