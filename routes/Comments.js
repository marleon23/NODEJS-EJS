//Make class that stores post_id and the comments that been uploaded
class Coment{
    static comments = [];

    static getComments(){
        return this.comments;
    }
    
    static addComment(comment){
        this.comments.push(comment)
    }
}


module.exports = Coment;