# scripts/start-finetune.py

import openai
import os

# Clé API (utilise la variable d'environnement si elle est définie)
openai.api_key = os.getenv("OPENAI_API_KEY")

# Fine-tuning lancé
response = openai.FineTuningJob.create(
    training_file="file-R39diw6jvwzjMSXouzshny",  # ton ID de fichier
    model="gpt-3.5-turbo"
)

print("🚀 Fine-tuning lancé avec l’ID :", response["id"])
