var entries = [];
var temp = '';

$( document ).ready(functison() {

    $(".push").click(btn);

});

function btn() {

    // Value
    var val = $(this).text();
    var $this = $(".total");

    // Numbers
    if (!isNaN(val) || val === '.') {
        temp += val;
        $this.text(temp.substr(0, 7));

    // AC
    } else if ( val == "AC" ) {
        entries = [];
        temp = "";
        $this.text('');

    // CE
    } else if (val === 'CE') {
        temp = '';
        $this.text('');

    // Multiply
    } else if (val === '×') {
        entries.push(temp);
        entries.push('*');
        temp = '';

    // Divide
    } else if (val === '÷') {
        entries.push(temp);
        entries.push('/');
        temp = '';

    // Equal
    } else if (val === '=') {
        entries.push(temp);

        var num = Number(entries[0]);

        for (var i = 1; i < entries.length; i++) {
            var nextNum = Number(entries[i + 1])
            var symbol = entries[i];

            if (symbol === '+') {
                num += nextNum;
            } else if (symbol === '-') {
                num -= nextNum;
            } else if (symbol === '*') {
                num *= nextNum;
            } else if (symbol === '/') {
                num /= nextNum;
            }

            i++;
        }

       // Swap the '-' symbol
        if (num < 0) {
            num = '-' + Math.abs(num);
        }

        $this.text(num);

        entries = [];
        temp = '';

    // Push Number
    } else {
        entries.push(temp);
        entries.push(val);
        temp = '';
    }

}
