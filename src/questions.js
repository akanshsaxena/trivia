export default async function questions(cat, dif, cou) {
    const url = `https://opentdb.com/api.php?amount=${cou}&category=${cat}&difficulty=${dif}&type=multiple`
    const getData = await fetch(url)
    const data = await getData.json()
    return (data.results)
}