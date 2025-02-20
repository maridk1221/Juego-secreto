import requests
from bs4 import BeautifulSoup

# Datos proporcionados
nombre = "Juan Pérez López"
curp = "PEJL920101HDFLNR01"  # Ejemplo de CURP
fecha_nacimiento = "01/01/1992"
padres = "José Pérez y María López"

# Buscar en una red social ficticia (ejemplo)
url = f"https://ejemplo-red-social.com/buscar?q={nombre}"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Extraer resultados
perfiles = soup.find_all('div', class_='perfil')
for perfil in perfiles:
    nombre_perfil = perfil.find('h2').text
    if nombre.lower() in nombre_perfil.lower():
        print(f"Perfil encontrado: {nombre_perfil}")
        print(f"Enlace: {perfil.find('a')['href']}")