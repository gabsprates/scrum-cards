(function($) {
    var values = [0,1,2,3,4,5,6,7,8,9,10,11];
    var mask;
    var close;
    var selected;
    var blackboard;

    function toggleTurn(e) {
        var btn = e.target;
        if (btn.classList.contains('is-off')) {
            btn.classList.remove('is-off')
        } else {
            btn.classList.add('is-off')
        }
    }

    function closeMask() {
        mask && mask.classList.remove('is-on');
    }

    function selectCard(e) {
        if (mask) {
            var cardButton = newButton(e.target.dataset.value);
            cardButton.classList.add('is-off');
            cardButton.addEventListener('click', toggleTurn);
            mask.classList.add('is-on');
            selected.innerHTML = '';
            selected.appendChild(cardButton);
        } else {
            alert('wait a second...');
        }
    }

    function newColumn() {
        var column = document.createElement('div');
        column.classList.add('column', 'is-one-quarter');
        return column;
    }

    function newButton(value) {
        var button = document.createElement('button');
        button.classList.add('cardboard');
        button.dataset.value = value;
        button.innerText = value;
        return button;
    }

    function newCard(value) {
        var card = newColumn();
        var button = newButton(value);
        button.addEventListener('click', selectCard);
        card.appendChild(button);
        return card;
    }

    (function init() {
        mask = $.querySelector('#mask');
        close = $.querySelector('#mask > button');
        selected = $.querySelector('#selected');
        blackboard = $.querySelector('#blackboard');

        close.addEventListener('click', closeMask);

        values.map(function (value) {
            blackboard.appendChild(newCard(value));
        });
    })();

})(document);
