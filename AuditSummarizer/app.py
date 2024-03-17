from flask import Flask, request, jsonify
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

# Load the saved model and tokenizer (replace with your file paths)
model_name = "path/to/your/pegasus_model.pt"  # Replace with actual model path
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

app = Flask(__name__)

@app.route("/summarize", methods=["POST"])
def generate_summary():
    try:
        # Get the text for summarization from the request body
        text = request.json["text"]
        if not text:
            return jsonify({"error": "Missing text in request body"}), 400

        # Generate summary using the loaded model
        with torch.no_grad():
            input_ids = tokenizer(text, return_tensors="pt")
            summary_ids = model.generate(input_ids, max_length=128)
            summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)

        return jsonify({"summary": summary})

    except Exception as e:
        print(f"Error during summarization: {e}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)  # Adjust host and port as needed
