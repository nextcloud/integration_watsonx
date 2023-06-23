OC.L10N.register(
    "integration_openai",
    {
    "ChatGPT-like text generation (by OpenAI)" : "ChatGPT benzeri metin oluşturma (OpenAI ile)",
    "AI image generation (by OpenAI Dall-E 2)" : "AI görsel oluşturma (OpenAI Dall-E 2 ile)",
    "AI speech-to-text (Whisper via OpenAI)" : "AI konuşmadan metne (OpenAI ile Whisper)",
    "Bad HTTP method" : "HTTP yöntemi hatalı",
    "Bad credentials" : "Kimlik doğrulama bilgileri hatalı",
    "Connected accounts" : "Bağlı hesaplar",
    "OpenAI's Whisper Speech-To-Text" : "OpenAI Whisper konuşmadan metne",
    "OpenAI integration" : "OpenAI bütünleştirmesi",
    "Integration of OpenAI's GPT-3 and DALL·E 2" : "OpenAI GPT-3 ve DALL·E 2 bütünleştirmesi",
    "This app includes 3 custom smart pickers for Nextcloud:\n* ChatGPT answers\n* DALL·E 2 images\n* Whisper dictation\n\nIt also implements\n\n* a Translation provider (using ChatGPT)\n* a SpeechToText provider (using Whisper)\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted LocalAI instance.\n\n## Ethical AI Rating\n### Rating for ChatGPT via OpenAI API: 🔴\n\nNegative:\n* the software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be run on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for DALL·E via OpenAI API: 🔴\n\nNegative:\n* the software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be ran on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Whisper via OpenAI API: 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "Nextcloud için 3 özel akıllı derleyici uygulaması:\n* ChatGPT yanıtları\n* DALL·E 2 görselleri\n* Whisper diktesi\n\nAyrıca şu uygulamalar vardır\n\n* Bir çeviri hizmeti sağlayıcı (ChatGPT kullanarak)\n* Bir SpeechToText hizmeti sağlayıcı (Whisper kullanarak)\n\nBunlar için OpenAI API yazılımına bağlanmak yerine, kendinizin barındırdığı bir LocalAI kopyasına da bağlanabilirsiniz.\n\n## Etik yapay zeka değerlendirmesi\n### OpenAI API aracılığıyla ChatGPT değerlendirmesi: 🔴\n\nOlumsuz:\n* Bu modelin öğrenme ve etkileşimi için kullanılan yazılım tescillidir. Yerel olarak çalıştırmayı veya kendi başınıza eğitmenizi sınırlandırır\n* Eğitimli model ücretsiz olarak alınamaz, bu nedenle model kuruluş içinde çalıştırılamaz\n* Eğitim verileri ücretsiz olarak alınamaz. Bu da dış tarafların önyargıyı kontrol etme ve düzeltme veya modelin başarımı ile CO2 kullanımını iyileştirme yeteneğini sınırlar.\n\n\n### OpenAI API aracılığıyla DALL·E değerlendirmesi: 🔴\n\nOlumsuz:\n* Bu modelin öğrenme ve etkileşimi için kullanılan yazılım tescillidir. Yerel olarak çalıştırmayı veya kendi başınıza eğitimi sınırlandırır\n* Eğitilmiş model ücretsiz olarak alınamaz, bu nedenle model kuruluş içinde çalıştırılamaz\n* Eğitim verileri ücretsiz olarak alınamaz. Bu da dış tarafların önyargıyı kontrol etme ve düzeltme veya modelin başarımı ile CO2 kullanımını iyileştirme yeteneğini sınırlar.\n\n\n### OpenAI API aracılığıyla Whisper değerlendirmesi: 🟡\n\nOlumlu:\n* Bu modelin öğrenme ve etkileşim yazılımı açık kaynak kodludur\n* Eğitilmiş model ücretsiz olarak alınabilir ve bu nedenle kuruluş içinde çalıştırılabilir\n\nOlumsuz:\n* Eğitim verileri ücretsiz olarak alınamaz. Bu da dış tarafların önyargıyı kontrol etme ve düzeltme veya modelin başarımı ile CO2 kullanımını iyileştirme yeteneğini sınırlar.\n\n\n[Günlüğümüzden](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/) Nextcloud Ethical AI değerlendirmesi hakkında ayrıntılı bilgi alın.",
    "LocalAI URL (leave empty to use openai.com)" : "LocalAI adresi (boş bırakılırsa openai.com kullanılır)",
    "example:" : "örnek:",
    "This should be the address of your LocalAI instance from the point of view of your Nextcloud server. This can be a local address with a port like http://localhost:8080" : "Nextcloud sunucunuz için LocalAI kopyanızın adresi. http://localhost:8080 gibi bir bağlantı noktası olan yerel bir adres olabilir.",
    "OpenAI API key" : "OpenAI API anahtarı",
    "your API key" : "API anahtarınız",
    "You can create a free API key in your OpenAI account settings:" : "OpenAI hesap ayarlarınızdan ücretsiz bir API anahtarı oluşturabilirsiniz:",
    "Default completion model to use" : "Kullanılacak varsayılan tamamlama modeli",
    "More information about OpenAI models" : "OpenAI modelleri hakkında ayrıntılı bilgi",
    "Select which features you want to enable" : "Etkinleştirmek istediğiniz özellikleri seçin",
    "Whisper transcription/translation with the Smart Picker" : "Akıllı seçici ile Whisper yazıya dönüştürme ve çeviri",
    "Image generation with the Smart Picker" : "Akıllı seçici ile görsel oluşturma",
    "Text generation with the Smart Picker" : "Akıllı seçici ile metin oluşturma",
    "Translation provider (to translate Talk messages for example)" : "Çeviri hizmeti (örneğin Talk iletilerini çevirmek için)",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Yazıdan metni dönüştürme hizmeti (örneğin Talk kayıtlarını yazıya dönüştürmek için)",
    "OpenAI admin options saved" : "OpenAI yönetici ayarları kaydedildi",
    "Failed to save OpenAI admin options" : "OpenAI yönetici ayarları kaydedilemedi",
    "OpenAI image generation" : "OpenAI görsel oluşturma",
    "Open image in a new tab" : "Görseli yeni bir sekmede aç",
    "Image information was not found on the server. The data might have been cleaned up because the image has not been displayed during more than 10 days." : "Görsel bilgileri sunucuda bulunamadı. Görsel 10 günden uzun süredir görüntülenmediğinden veriler temizlenmiş olabilir.",
    "Loading image" : "Görsel yükleniyor",
    "Generated image" : "Oluşturulan görsel",
    "The remote image cannot be fetched. OpenAI might have deleted it." : "Uzak görsel alınamadı. OpenAI tarafından silinmiş olabilir.",
    "Direct image link" : "Doğrudan görsel bağlantısı",
    "Your administrator defined a custom service address" : "Yöneticiniz bir özel hizmet adresi tanımlamış",
    "Leave the API key empty to use the one defined by administrators" : "Yöneticiler tarafından tanımlanmış bir anahtarın kullanılması için API anahtarını boş bırakın",
    "OpenAI options saved" : "OpenAI ayarları kaydedildi",
    "Failed to save OpenAI options" : "OpenAI ayarları kaydedilemedi",
    "ChatGPT-like text generation" : "ChatGPT benzeri metin oluşturma",
    "Preview" : "Ön izleme",
    "Preview content" : "İçerik ön izlemesi",
    "Show/hide advanced options" : "Gelişmiş ayarları görüntüle/gizle",
    "Advanced options" : "Gelişmiş ayarlar",
    "Preview text generation by OpenAI" : "OpenAI ile oluşturulan metin ön izlemesi",
    "Submit text generated by OpenAI" : "OpenAI ile oluşturulan metni gönder",
    "Send" : "Gönder",
    "Include the prompt in the result" : "Sonuca soru da katılsın",
    "How many results to generate" : "Oluşturulacak sonuç sayısı",
    "Model to use" : "Kullanılacak model",
    "Approximate maximum number of words to generate (tokens)" : "Yaklaşık olarak oluşturulacak en fazla sözcük sayısı (belirteçler)",
    "What is the matter with putting pineapple on pizza?" : "Pizzaya ananas koymanın ne anlamı var?",
    "by OpenAI" : "OpenAI tarafından",
    "Choose a model" : "Bir model seçin",
    "Regenerate" : "Yeniden oluştur",
    "Failed to save OpenAI default model ID" : "OpenAI varsayılan model kimliği kaydedilemedi",
    "OpenAI error" : "OpenAI sorunu",
    "Unknown OpenAI API error" : "Bilinmeyen OpenAI API sorunu",
    "Prompt" : "Soru",
    "Result" : "Sonuç",
    "Result {index}" : "Sonuç {index}",
    "AI image generation" : "AI görsel oluşturma",
    "Preview images with OpenAI" : "Görselleri OpenAI ile ön izle",
    "Submit the current preview" : "Geçerli ön izlemeyi gönder",
    "Number of images to generate (1-10)" : "Oluşturulacak görsel sayısı (1-10)",
    "Size of the generated images" : "Oluşturulacak görsellerin boyutu",
    "cyberpunk pizza with pineapple, cats fighting with lightsabers" : "ananaslı siberpunk pizza, ışın kılıçlarıyla dövüşen kediler",
    "by OpenAI with DALL·E 2" : "OpenAI tarafından DALL·E 2 ile",
    "Unknown error" : "Sorun bilinmiyor",
    "AI speech-to-text" : "AI konuşmadan metne",
    "Transcribe" : "Dönüştür",
    "Translate (only to English)" : "Dönüştür (yalnızca İngilizce'ye)",
    "by OpenAI with Whisper" : "OpenAI tarafından Whisper ile",
    "Translate" : "Çevir",
    "Failed to get transcription/translation" : "Dönüştürülemedi/çevrilemedi"
},
"nplurals=2; plural=(n > 1);");
