$("#searchBtn").click(function(){

let query=$("#query").val();


    $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=ff562287b23651d09b52f165e7288cf4&language=en-US&query="+query+"&page=1&include_adult=false",function(data){
        console.log(data.results[0])
        $("#movie_name").html(data.results[0].title)
        $("#movie_desc").html(data.results[0].overview)
        $("#poster").attr("src","https://image.tmdb.org/t/p/w500"+data.results[0].poster_path)
    })
})
