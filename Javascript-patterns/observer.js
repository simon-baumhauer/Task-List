function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.obeservers.puch(fn);
    console.log(`You are now subscribed to ${fn}`);
  },

  unsubsrcribe: function (fn) {
    // Filter out from the list whatever matches the callback function.
    // If there is no match , the callback gets to stay on the list.
    // The fitler returns a new list and reassigns the list of observers.
    this.observers = this.obeservers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now usubsubscribed from ${fn.name}`);
  },

  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  },
};

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubsrcribe(getCurMilliseconds);
});

document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().toMilliseconds()}`);
};
