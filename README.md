# Wetter App

Die Wetter-App bietet die Möglichkeit, das Wetter für die aktuelle Position oder eine beliebige Stadt anzuzeigen. Dabei gibt eine stündliche Vorschau für die nächsten 24 Stunden oder eine tägliche Vorhersage für die nächsten 7 Tage. Für den aktuellen Tag werden neben einer kurzen Beschreibung sowie der Temperatur auch Daten wie Windgeschwindigkeit, Sichtweite und der UV-Index angezeigt.

## Wireframes

Das Design dieser Anwendung stammt von einer Designvorlage von Behanced, die mittlerweile nicht mehr verfügbar ist. Die Umsetzung sollte so genau wie möglich erfolgen. Allerdings sind die Navigation und genaue Funktionsweise, basierend auf den Designs, nicht vollständig ersichtlich. An den nötigen Stellen wurden dann eigene Lösungen entwickelt und umgesetzt. Ebenfalls nicht öffentlich verfügbar waren die verwendeten 3D-Wetter Icons, welche daher durch ähnliche ersetzt wurden.

## Frontend

Die Wetter-App bietet die Möglichkeit, das Wetter für die aktuelle Position oder eine beliebige Stadt anzuzeigen. Dabei gibt eine stündliche Vorschau für die nächsten 24 Stunden oder eine tägliche Vorhersage für die nächsten 7 Tage. Für den aktuellen Tag werden neben einer kurzen Beschreibung sowie der Temperatur auch Daten wie Windgeschwindigkeit, Sichtweite und der UV-Index angezeigt.

![Screenshot 1](https://robin-beckmann.de/_next/image?url=%2Fimages%2Fprojects%2Fweatherapp%2Fimage1.jpg&w=256&q=75)
![Screenshot 2](https://robin-beckmann.de/_next/image?url=%2Fimages%2Fprojects%2Fweatherapp%2Fimage2.jpg&w=256&q=75)
![Screenshot 3](https://robin-beckmann.de/_next/image?url=%2Fimages%2Fprojects%2Fweatherapp%2Fimage3.jpg&w=256&q=75)

## Backend

Die verwendeten Daten stammen von der OpenWeather API. Über die One Call API werden die Wetterdaten für den aktuellen Tag sowie die stündlichen und täglichen Vorhersagen abgerufen. Mithilfe der Geocoding API werden die Städtenamen in Geolocations umgewandelt und umgekehrt. Damit der benötigte API-Schlüssel nicht in der App liegt und möglicherweise ausgelesen wird, wurde zwischen App und OpenWeather API eine serverless Funktion geschaltet, welche als Cloudflare Worker ausgeliefert wird.

Der Code für das Backend befindet sich dabei im Repository [weather-api](https://github.com/TheXires/weather-api)
