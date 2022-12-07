


/** Model class allowing to format data the way we need. Imported in Hero.js */




const initModel = {
    firstName: '',
    id: null,
    sessions: {
        activitySessions: null,
        averageSessions: null,
    },
    skillData: null,
    todayScore: null,
    keyData: null,

}

class Model {

    constructor(data) {
        this.data = data;
        console.log(this.data)
        this.user = this._buildUSerModel()

    }
    _buildUSerModel = () => {
        if (!this.data) {
            console.log(initModel)
            return initModel;
        }
        else {
            console.log(this.setuserData(this.data))
            return this.setuserData(this.data)
        }

    }



    setuserData(newData) {
        this.user.firstName = newData.firstName;
        console.log(this.user.firstName)
        this.user.sessions = newData.metadatas.sessions;
        this.user.activitySessions = newData.metadatas.sessions.activitySessions;
        this.user.averageSessions = newData.metadatas.sessions.averageSessions;
        this.user.todayScore = newData.metadatas.todayScore;
        this.user.skillData = newData.metadatas.skillData;
        this.user.keyData = newData.metadatas.keyData;
        // this.user.id = newData.id;

    }




    // set firstName(newData) {
    //     this.user.firstName = newData;
    // }


}

export default Model
