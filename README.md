# Hermandad Sacramental de la Candelaria

Web de la Hermandad Sacramental de la Candelaria de Jerez de la Frontera.

## Ejecutar en local

```bash
npm ci
npm run dev
```

Abre http://localhost:3000 en el navegador.

## Publicar en GitHub Pages

El proyecto exporta archivos estáticos de Next.js en `out/`. El workflow
`.github/workflows/deploy.yml` los publica automáticamente en GitHub Pages al
actualizar la rama `master`.

En GitHub, configura **Settings → Pages → Build and deployment → Source →
GitHub Actions**. La dirección del proyecto será:

https://msangar27.github.io/hermandadsacramentaldelacandelaria/

Para cambiar el nombre del repositorio, ve a **Settings → General → Repository
name**. GitHub conserva el historial y los archivos. Después actualiza el
remoto local con:

```bash
git remote set-url origin https://github.com/msangar27/hermandadsacramentaldelacandelaria.git
```
