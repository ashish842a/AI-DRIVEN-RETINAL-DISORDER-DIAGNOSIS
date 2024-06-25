import random

# Mock function to simulate a classifier (replace this with your actual model)
def predict_disease(image_path):
    # Simulating random prediction
    diseases = ["DIABETIC RETINOPATHY", "MACULAR EDEMA", "NORMAL"]
    return random.choice(diseases)

# Function to process a single image and show prediction
def process_single_image(image_path):
    disease = predict_disease(image_path)
    print(f"Image {image_path}: Predicted Disease - {disease}")

# Example usage
if __name__ == "__main__":
    # Example image path (replace this with your actual image path)
    image_path = r"D:\Nit_raipur\CSVTU\Project\public\images\eyeImages\eye1.jpg"


    # Process single image and show prediction
    process_single_image(image_path)
