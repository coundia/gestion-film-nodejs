const movies = [
    {
        id: 1,
        name: "Ironman 1",
        date: new Date(),
        rate: 10,
    },
    {
        id: 2,
        name: "Ironman 2",
        date: new Date(),
        rate: 10,
    }
];


function getAll(){
    return movies;
}
function getOne(id){
    return  movies.find((m) => m.id == id);
}
function updateOne(m){

    this.movies[m.id - 1] = m;
}
function deleteOne(id){
    const index = movies.findIndex((m) => m.id == id);
    return  movies.splice(index, 1);
}
function createOne(movie){
    //sort
    const sorted = this.students.sort((a, b) => a.id - b.id);
    //increase last ID
    aStudent.id = sorted[sorted.length - 1].id + 1;
    //console.log(aStudent);
        if(movies.push(movie))
    return movie
}
/**
 * Exports
 */
module.exports = {
    getAll,
    getOne,
    updateOne,
    deleteOne,
    createOne,
}
