function ParsDate(){
    let myDate = new Date();
    let G_year = myDate.getFullYear();
    let G_month = myDate.getMonth();
    let G_monthDay = myDate.getDate();

    this.FullYear = function(){
        if(G_month<2){
            return (G_year-622);
        }
        else if (G_month==2){
            if(G_monthDay<21){
                return (G_year-622);
            }
            else{
                return (G_year-621);
            }
        }
        else{
            return (G_year-621);
        }
    }
    // this.ParsMonth(){

    // }
}

let p = new ParsDate();
console.log(p.FullYear());