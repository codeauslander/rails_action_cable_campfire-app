App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    alert(data['message']);
  },

  speak: function(message) {
    console.log('speak');
    // ActionCable.server.broadcast("room_channel", {message: message});
    return this.perform('speak',{message: message});
  },
});

(function() {
  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      // console.log(App.room);
      App.room.speak(event.target.value);
      event.target.value = '';
      return event.preventDefault();
    }
  });

}).call(this);

