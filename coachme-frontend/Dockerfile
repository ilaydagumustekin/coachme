# Vite yerine CRA (create-react-app) kullandığını belirttiğin için bu yapı uygun:
FROM node:18-alpine

# Çalışma dizini
WORKDIR /app

# package.json ve package-lock.json kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama dosyalarını kopyala
COPY . .

# Uygulama build et (üretim)
RUN npm run build

# Servis için basit bir web sunucusu: serve
RUN npm install -g serve

# 3000 portunu aç
EXPOSE 3000

# Uygulamayı serve ile başlat
CMD ["serve", "-s", "build", "-l", "3000"]
