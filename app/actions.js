'use server';

export async function createPost(formData) {
    console.log("actions")
    const data = {
        name: formData.get("name"),  
        desc: formData.get("desc"),
        amt: formData.get("amt"),
      };
      console.log("Data Sent to Server:", data);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch( API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // Send the data properly
  });

  return response.json(); // Return the response if needed
}
