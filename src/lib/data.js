export const animalJson = async () => {
    const res = await fetch('https://assignmen-8-nextjs-server.onrender.com/animal');
    const data = res.json();
    return data;
}

export const animalSingleJsonDetails = async (id) => {
    const res = await fetch(`https://assignmen-8-nextjs-server.onrender.com/animal/${id}`);
    const data = res.json();
    return data;
}
