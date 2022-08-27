class TiVi {
    constructor(channel, volumn, status) {
        this.channel = 2;
        this.volumn = 10;
        this.status = false;
    }
    getStatus() {
        if (this.status = false) {
            alert("tv is on")
        }
        else { alert("tv is off")}
    }
    getChannel() {
        return this.channel;
    }
    getVolumn() {
        return this.volumn;
    };
    setChangeC(channelChanging) {
        this.channel = channelChanging;
    }
    setVolumn(volumn) {
        this.volumn += volumn;

    }
}
// endTV
class Remote {
    constructor(name) {
        this.name = name
    };
    getRemoteName() {
        return this.name;
    }
    setChangeC(channelChanging) {
        this.channel = channelChanging;
    }
    setVolumn(volumnChanging) {
        this.volumn = volumnChanging;
    }
};
const TV = new TiVi();
const TVRemote = new Remote("TiviRemote")
let TVstatus = TV.getStatus;
let TVchannels = TV.getChannel;
let TVvolumn = TV.getVolumn;
let ChangeChannel = TV.setChangeC
ChangeChannel = TVRemote.setChangeC;
let ChangeVolumn = TVRemote.setVolumn
ChangeVolumn = TV.setVolumn;