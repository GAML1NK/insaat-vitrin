# GitHub Setup - İnşaat-Vitrin

## GitHub Reposu Açmak İçin Adımlar

1. **GitHub'a Giriş Yap**
   - https://github.com/ adresine git
   - Hesabına giriş yap (Yoksa bir hesap oluştur)

2. **Yeni Repository Oluştur**
   - Sağ üstteki "+" ikonuna tıkla → "New repository"
   - Repository adı: `insaat-vitrin`
   - Açıklama: `İnşaat-Vitrin - Profesyonel İnşaat Firması Web Sitesi`
   - Public seçin (SEO için daha iyi)
   - "Create repository" ye tıkla

3. **Lokal Reponu GitHub'a Bağla**
   - GitHub sayfasında bu komutları kopyala ve çalıştır:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/insaat-vitrin.git
git push -u origin main
```

NOT: `YOUR_USERNAME` yerine GitHub kullanıcı adını koy!

4. **Doğrulama**
   - GitHub sayfana git
   - insaat-vitrin reponu görürsen başarılı!

## GitHub Pages ile Deploy Etme

1. **package.json'a bu satırı ekle:**
```json
"homepage": "https://YOUR_USERNAME.github.io/insaat-vitrin"
```

2. **GitHub Pages paketini yükle:**
```bash
npm install --save-dev gh-pages
```

3. **package.json scripts kısmına ekle:**
```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. **Deploy et:**
```bash
npm run deploy
```

5. **GitHub Settings'e Git**
   - Repository → Settings → Pages
   - Source: Deploy from a branch seç
   - Branch: gh-pages
   - Save

6. **Sitenin yayınlı hali:**
```
https://YOUR_USERNAME.github.io/insaat-vitrin
```

## Custom Domain (İsteğe Bağlı)

Eğer özel domain alırsan (örn: insaat-vitrin.com):

1. Domaini DNS ayarlarında GitHub IP'sine yönlendir
2. GitHub Settings → Pages → Custom domain'e domain adını gir

---

**Hazır mısın? Başlayalım! 🚀**
