OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "Unbekannter Modellfehler",
    "Default" : "Standard",
    "Text generation" : "Texterstellung",
    "Image generation" : "Bilderstellung",
    "Audio transcription" : "Audio-Transskription",
    "Unknown" : "Unbekannt",
    "tokens" : "Token",
    "images" : "Bilder",
    "seconds" : "Sekunden",
    "Unknown error while retrieving quota usage." : "Unbekannter Fehler beim Abrufen der Kontingentnutzung.",
    "Text generation quota exceeded" : "Das Kontingent für die Texterstellung wurde überschritten",
    "Unknown text generation error" : "Unbekannter Fehler bei der Texterstellung",
    "Could not read audio file." : "Audio-Datei konnte nicht gelesen werden.",
    "Audio transcription quota exceeded" : "Das Kontingent für Audiotranskription überschritten",
    "Unknown audio trancription error" : "Unbekannter Fehler bei der Audiotransskription",
    "Image generation quota exceeded" : "Das Kontingent für die Bilderstellung wurde überschritten",
    "Unknown image generation error" : "Unbekannter Fehler bei der Bilderstellung",
    "Bad HTTP method" : "Ungültige HTTP-Methode",
    "Bad credentials" : "Falsche Anmeldeinformationen",
    "API request error: " : "Fehler bei der API-Anfrage:",
    "Detect language" : "Sprache erkennen",
    "Friendlier" : "Freundlicher",
    "More formal" : "Mehr formal",
    "Funnier" : "Lustiger",
    "More casual" : "Mehr lässig",
    "More urgent" : "Mehr dringlich",
    "Maximum output words" : "Maximal ausgegebene Wörter",
    "The maximum number of words/tokens that can be generated in the completion." : "Die maximale Anzahl von Wörtern/Tokens, die in der Vervollständigung erzeugt werden können.",
    "Model" : "Modell",
    "The model used to generate the completion" : "Das zur Generierung der Vervollständigung verwendete Modell",
    "Change Tone" : "Ton ändern",
    "Ask a question about your data." : "Stellen Sie eine Frage zu Ihren Daten.",
    "Input text" : "Texteingabe",
    "Write a text that you want the assistant to rewrite in another tone." : "Schreiben Sie einen Text, den der Assistent in einem anderen Ton umschreiben soll.",
    "Desired tone" : "Gewünschter Ton",
    "In which tone should your text be rewritten?" : "In welchem Ton soll Ihre Text umgeschrieben werden?",
    "Generated response" : "Erzeugte Antwort",
    "The rewritten text in the desired tone, written by the assistant:" : "Der umgeschriebene Text im gewünschten Ton, geschrieben von Assistant:",
    "OpenAI's DALL-E 2" : "DALL-E 2 von OpenAI",
    "Size" : "Größe",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Optional. Die Größe der generierten Bilder muss im Format 256x256 sein. Standard ist %s",
    "The model used to generate the images" : "Das zur Generierung der Bilder verwendete Modell",
    "OpenAI and LocalAI integration" : "OpenAI und LocalAI-Integration",
    "Integration of OpenAI and LocalAI services" : "Integration von OpenAI und LocalAI-Diensten",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline, Context Write, Chat, and Reformulate (using any available large language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n* An image generation provider\n\n⚠️ Context Write, Summarize, Headline and Reformulate have mainly been tested with OpenAI.\nThey might work when connecting to other services, without any guarantee.\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance or [Ollama](https://ollama.com/) instance\nor to any service that implements an API similar to the OpenAI one, for example:\n[IONOS AI Model Hub](https://docs.ionos.com/cloud/ai/ai-model-hub), [Plusserver](https://www.plusserver.com/en/ai-platform/) or [MistralAI](https://mistral.ai).\n\n⚠️ This app is mainly tested with OpenAI. We do not guarantee it works perfectly\nwith other services that implement OpenAI-compatible APIs with slight differences.\n\n## Improve AI task pickup speed\n\nTo avoid task processing execution delay, setup at 4 background job workers in the main server (where Nextcloud is installed). The setup process is documented here: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via the OpenAI API: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n* The training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ Die Smart Picker wurden aus dieser App entfernt\nda sie jetzt in der [Assistant-App](https://apps.nextcloud.com/apps/assistant) enthalten sind.\n\nDiese App implementiert:\n\n* Anbieter für die Texterstellung: Kostenlose Eingabeaufforderung, Zusammenfassung, Überschrift, Schreiben im Kontext und Neuformulierung (unter Verwendung jedes verfügbaren großen Sprachmodells)\n* Einen Übersetzungsanbieter (unter Verwendung jedes verfügbaren Sprachmodells)\n* Einen Sprache-zu-Text-Anbieter (mit Whisper)\n* Einen Anbieter zur Bilderstellung\n\n⚠️ Schreiben im Kontext, Zusammenfassung, Überschrift und Neuformulierung wurden hauptsächlich mit OpenAI getestet, können aber auch mit anderen Diensten funktionieren, ohne jegliche Garantie.\n\nAnstatt hierzu eine Verbindung zur OpenAI-API herzustellen, können Sie auch eine Verbindung zu einer selbst gehosteten [LocalAI](https://localai.io)-Instanz, [Ollama](https://ollama.com/)-Instanz oder zu jedem\nDienst, der eine API ähnlich der von OpenAI implementiert, herstellen. Z. B.: \n[IONOS KI-Model Hub](https://docs.ionos.com/cloud/ai/ai-model-hub), [Plusserver](https://www.plusserver.com/en/ai-platform/) oder [MistralAI](https://mistral.ai). ).\n\n⚠️ Diese App wurde hauptsächlich mit OpenAI getestet. Wir können nicht garantieren, dass sie mit anderen Diensten, die OpenAI-kompatible APIs mit leichten Unterschieden implementieren, perfekt funktioniert.\n\n## Verbesserung der Geschwindigkeit bei der Übernahme von AI-Aufgaben\n\nUm Verzögerungen bei der Ausführung von Aufgaben zu vermeiden, richten Sie mindestens 4 Hintergrund-Jobworker auf dem Hauptserver ein (auf dem Nextcloud installiert ist). Der Einrichtungsprozess ist hier dokumentiert: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Ethische KI-Bewertung\n### Bewertung für Textgenerierung mit ChatGPT über die OpenAI-API: 🔴\n\nNegativ:\n* Die Software für das Training und die Inferenz dieses Modells ist proprietär und beschränkt die lokale Ausführung oder das Training selbst\n* Das trainierte Modell ist nicht frei verfügbar und kann daher nicht lokal ausgeführt werden\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten Externer einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und Verzerrungen zu korrigieren oder sie zu optimieren.\n\n\n### Bewertung für die Übersetzung mit ChatGPT über die OpenAI-API: 🔴\n\nNegativ:\n* Die Software für das Training und die Inferenz dieses Modells ist proprietär und beschränkt die lokale Ausführung oder das Training selbst\n* Das trainierte Modell ist nicht frei verfügbar und kann daher nicht lokal ausgeführt werden\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten externer Parteien einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und auf Verzerrungen zu korrigieren oder sie zu optimieren.\n\n### Bewertung für Bildgenerierung mit DALL·E über die OpenAI-API: 🔴\n\nNegativ:\n* Die Software zum Trainieren und Inferenzieren dieses Modells ist proprietär und beschränkt die lokale Ausführung oder das Training selbst\n* Das trainierte Modell ist nicht frei verfügbar und kann daher nicht lokal ausgeführt werden\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten externer Parteien einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und auf Verzerrungen zu korrigieren oder sie zu optimieren.\n\n\n### Bewertung für Sprache-zu-Text mit Whisper über die OpenAI-API: 🟡\n\nPositiv:\n* Die Software zum Trainieren und Inferenzieren dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher vor Ort ausgeführt werden\n\nNegativ:\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten externer Parteien einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und auf Verzerrungen zu korrigieren oder sie zu optimieren.\n\n### Bewertung für Texterstellung über LocalAI: 🟢\n\nPositiv:\n* Die Software zum Trainieren und Inferenzieren dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher lokal ausgeführt werden\n* Die Trainingsdaten sind frei verfügbar und ermöglichen die Überprüfung oder Korrektur von Verzerrungen sowie die Optimierung der Leistung und des CO2-Verbrauchs.\n\n\n### Bewertung für Bilderstellung mit Stable Diffusion über LocalAI: 🟡\n\nPositiv:\n* Die Software zum Trainieren und Inferenzieren dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher lokal ausgeführt werden\n\nNegativ:\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten externer Parteien einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und auf Verzerrungen zu korrigieren oder sie zu optimieren.\n\n\n### Bewertung für Speech-To-Text mit Whisper über LocalAI: 🟡\n\nPositiv:\n* Die Software zum Trainieren und Inferenzieren dieses Modells ist Open Source\n* Das trainierte Modell ist frei verfügbar und kann daher lokal ausgeführt werden\n\nNegativ:\n* Die Trainingsdaten sind nicht frei verfügbar, was die Möglichkeiten externer Parteien einschränkt, die Leistung des Modells und den CO2-Verbrauch zu überprüfen und auf Verzerrungen zu korrigieren oder sie zu optimieren.\n\nErfahren Sie mehr über das Nextcloud Ethical AI Rating [in unserem Blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "The Assistant app is not enabled. You need it to use the features provided by the OpenAI/LocalAI integration app." : "Die Assistant-App ist nicht aktiviert. Sie benötigen sie, um die von der OpenAI/LocalAI-Integrations-App bereitgestellten Funktionen nutzen zu können.",
    "Assistant app" : "Assistant-App",
    "Services with an OpenAI-compatible API:" : "Dienste mit einer OpenAI-kompatiblen API:",
    "Service URL" : "Service-URL",
    "Example: {example}" : "Beispiel: {example}",
    "Leave empty to use {openaiApiUrl}" : "Leer lassen um {openaiApiUrl} zu verwenden",
    "With the current configuration, the target URL used to get the models is:" : "Bei der aktuellen Konfiguration lautet die Ziel-URL, die zum Abrufen der Modelle verwendet wird:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Diese sollte die Adresse Ihrer LocalAI-Instanz (oder eines beliebigen Dienstes, der eine OpenAI-ähnliche API implementiert) zusammen mit dem Stammpfad der API enthalten. Auf diese URL wird von Ihrem Nextcloud-Server zugegriffen.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Dies kann eine lokale Adresse mit einem Port wie {example} sein. Stellen Sie in diesem Fall sicher, dass 'allow_local_remote_servers' in der config.php auf true gesetzt ist.",
    "Service name (optional)" : "Service-Name (optional)",
    "Example: LocalAI of university ABC" : "Beispiel: LocalAI der Universität ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Dieser Name wird als Anbietername in den AI-Administrationseinstellungen angezeigt",
    "Request timeout (seconds)" : "Anfrage-Zeitüberschreitung (Sekunden)",
    "Timeout for the request to the external API" : "Timeout für die Anfrage an die externe API",
    "Authentication" : "Authentifizierung",
    "Authentication method" : "Authentifizierungsmethode",
    "API key" : "API-Schlüssel",
    "Basic Authentication" : "Basis-Authentifizierung",
    "API key (mandatory with OpenAI)" : "API-Schlüssel (obligatorisch bei OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Sie können einen API-Schlüssel in Ihren OpenAI-Kontoeinstellungen erstellen",
    "Basic Auth user" : "Basic Auth-Benutzer",
    "Basic Auth password" : "Basic Auth-Passwort",
    "Text completion endpoint" : "Endpunkt zur Textvervollständigung",
    "Chat completions" : "Chat-Vervollständigungen",
    "Completions" : "Vervollständigungen",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "Die Auswahl des Chat-/Vervollständigungsendpunkts ist für OpenAI nicht verfügbar, da es implizit Chatvervollständigungen für fein abgestimmte Modelle verwendet, die \"Anweisungen folgen\".",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "Die Verwendung des Chat-Endpunkts kann die Qualität der Texterstellung für fein abgestimmte Modelle zur \"Anweisungsbefolgung\" verbessern.",
    "Default completion model to use" : "Zu verwendendes Standard-Vervollständigungsmodell",
    "More information about OpenAI models" : "Weitere Informationen über OpenAI-Modelle",
    "More information about LocalAI models" : "Weitere Informationen über LocalAI-Modelle",
    "Extra completion model parameters" : "Zusätzliche Parameter des Vervollständigungsmodells",
    "Max input tokens per request" : "Maximale Eingabetoken pro Anfrage",
    "Split the prompt into chunks with each chunk being no more than the specified number of tokens (0 disables chunking)" : "Die Eingabeaufforderung in Blöcke aufteilen, wobei jeder Block nicht mehr als die angegebene Anzahl von Tokens umfassen darf (0 deaktiviert das Aufteilen)",
    "Default image generation model to use" : "Zu verwendendes Standard-Bilderzeugungsmodell",
    "No models to list" : "Keine Modelle zum Auflisten",
    "Default image size" : "Standardbildgröße",
    "Use authentication for image retrieval request" : "Authentifizierung für Bildabrufanforderung verwenden",
    "Default transcription model to use" : "Zu verwendendes Standard-Transkriptionsmodell",
    "Usage limits" : "Nutzungsbeschränkungen",
    "Quota enforcement time period (days)" : "Zeitraum der Kontingentdurchsetzung (Tage)",
    "Usage quotas per time period" : "Nutzungskontingente pro Zeitraum",
    "Quota type" : "Kontingenttyp",
    "Per-user quota / period" : "Kontingent/Zeitraum pro Benutzer",
    "Current system-wide usage / period" : "Aktuelle systemweite Nutzung/Zeitraum",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Ein Limit pro Benutzer für die Nutzung dieses API-Typs (0 für unbegrenzt)",
    "Max new tokens per request" : "Maximale Anzahl neuer Token pro Anfrage",
    "Maximum number of new tokens generated for a single text generation prompt" : "Maximale Anzahl neuer Token, die für eine einzelne Eingabeaufforderung zur Texterstellung erzeugt werden",
    "Use \"{newParam}\" parameter instead of the deprecated \"{deprecatedParam}\"" : "\"{newParam}\"-Parameter anstatt des veralteten \"{deprecatedParam}\" verwenden",
    "Select enabled features" : "Aktivierte Funktionen auswählen",
    "Translation provider (to translate Talk messages for example)" : "Übersetzungsanbieter (zum Beispiel zum Übersetzen von Talk-Nachrichten)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Textverarbeitungsanbieter (zum Generieren von Text, Zusammenfassen, Schreiben im Kontext usw…)",
    "Image generation provider" : "Bilderstellungsanbieter",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Sprache-zu-Text-Anbieter (zum Beispiel zum Transkribieren von Talk-Gesprächsaufzeichnungen)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "JSON-Objekt. Sehen Sie sich die API-Dokumentation an, um eine Liste aller verfügbaren Parameter zu erhalten. Zum Beispiel: {example}",
    "Must be in 256x256 format (default is {default})" : "Muß im Format 256x256 sein (Standard ist {default})",
    "Failed to load models" : "Fehler beim Laden von Modellen",
    "Failed to load quota info" : "Kontingentinformationen konnten nicht geladen werden",
    "OpenAI admin options saved" : "OpenAI-Administrationseinstellungen gespeichert",
    "Failed to save OpenAI admin options" : "Fehler beim Speichern der OpenAI-Administrationseinstellungen",
    "Your administrator defined a custom service address" : "Ihre Administration hat eine benutzerdefinierte Dienstadresse definiert",
    "Leave the API key empty to use the one defined by administrators" : "API-Schlüssel leer lassen, um den von der Administration definierten Schlüssel zu verwenden",
    "You can create a free API key in your OpenAI account settings" : "Sie können in Ihren OpenAI-Kontoeinstellungen einen kostenlosen API-Schlüssel erstellen",
    "Leave the username and password empty to use the ones defined by your administrator" : "Benutzername und Passwort leer lassen, um den von der Administration definierten Schlüssel zu verwenden",
    "Username" : "Benutzername",
    "your Basic Auth user" : "Ihr Basic Auth-Benutzer",
    "Password" : "Passwort",
    "your Basic Auth password" : "Ihr Basic Auth-Passwort",
    "Usage quota info" : "Informationen zum Nutzungskontingent",
    "Usage" : "Verwendung",
    "Specifying your own API key will allow unlimited usage" : "Die Angabe Ihres eigenen API-Schlüssels ermöglicht eine unbegrenzte Nutzung",
    "OpenAI options saved" : "OpenAI-Einstellungen gespeichert",
    "Failed to save OpenAI options" : "Fehler beim Speichern der OpenAI-Einstellungen"
},
"nplurals=2; plural=(n != 1);");
