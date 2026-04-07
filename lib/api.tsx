export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
