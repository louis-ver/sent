import React, { Component } from 'react';
import './Connect.css';
import $ from 'jquery';

class Connect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            emoticon: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.emoticonSelected = this.emoticonSelected.bind(this);
        this.isDone = this.isDone.bind(this);
        this.connect = this.connect.bind(this);
    }
    render() {
        return (
            <div className="Connect">
                <div className="Login-label">Enter your name</div>
                <input className="Connect-name" type="text" value={this.state.name} onChange={this.handleChange}/>
                <div className="split"></div>
                <div className="Login-label">Select your avatar</div>
                <EmojiBox selectEmoticon={this.emoticonSelected} emoticon={this.state.emoticon}/>
                <div className="split"></div>
                <div className={"FileZone-button Login-button center " + (this.isDone() ? 'btn-done' : '')} onClick={this.connect}>Get started</div>

            </div>
        );
    }

    handleChange(event){
        this.setState({name: event.target.value});
    }

    emoticonSelected(emoticon){
        this.setState({'emoticon' : emoticon});
    }

    isDone(){
        return this.state.name && this.state.emoticon;
    }

    connect(){
        if(this.isDone()){
            let user = {name: this.state.name, emoticon: this.state.emoticon};
            this.props.login(user);
        }
    }
}

class EmojiBox extends Component {
    constructor(props){
        super(props);
        this.EMOTICONS = ['😀','😃','😄','😁','😆','😅','😂','😊','😇','🙂','🙃','😉','😌','😍','😘','😗','😙','😚','😋','😜','😝','😛','🤑','🤗','🤓','😎','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','😤','😠','😡','😶','😐','😑','😯','😦','😧','😮','😲','😵','😳','😱','😨','😰','😢','😥','😭','😓','😪','😴','🙄','🤔','😬','🤐','😷','🤒','🤕','😈','👿','👹','👺','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','👐','🙌','👏','🙏','👍','👎','👊','✊','✌️','🤘','👌','👈','👉','👆','👇','☝️','✋','🖐','👋','💪','👚','👕','👖','👔','👗','👙','👘','👠','👡','👢','👞','👟','👒','🎩','🎓','👑','⛑','🎒','👝','👛','👜','💼','👓','🕶','🌂','☂️'];

        this.state = {hasShownScroll : false};
        this.scrollDown = this.scrollDown.bind(this);
    }

    render() {
        let rows = [];
        let _this = this;
        this.EMOTICONS.forEach(function(emoticon){
            rows.push(<div key={emoticon} className={"Emoticon-element " + (_this.props.emoticon === '' ? '' : (_this.props.emoticon === emoticon ? 'active' : 'inactive'))} onClick={() => _this.props.selectEmoticon(emoticon)}>{emoticon}</div>);
        });

        return (
            <div className="EmojiBox center" onMouseEnter={this.scrollDown}>
                {rows}
            </div>
        );
    }

   scrollDown(){
        if(!this.state.hasShownScroll){
        $(".EmojiBox").animate({
		      scrollTop:$('.EmojiBox').scrollTop() + 150
	       }, 'slow');
        $(".EmojiBox").animate({
		      scrollTop:-($('.EmojiBox').scrollTop() + 150)
	    }, 'slow');
            this.setState({'hasShownScroll' : true});
        }
   }
}

export {Connect};
