console.log('hello');

let addedParamCount = 0;

let paramertersBox = document.getElementById('parametersBox');
paramertersBox.style.display = 'none';
document.getElementById('requestJsonBox').style.display = 'none';
document.getElementById('submit').style.display = 'none';

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
})

let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
});

let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row">
<label for="url" class="col-sm-2 col-form-label">Parameter 1</label>
<div class="col-md-4">
    <input type="text" class="form-control" id="parameterKey1" placeholder="Enter Parameter 1 Key">
</div>
<div class="col-md-4">
    <input type="text" class="form-control" id="parameterValue1" placeholder="Enter Parameter 1 Value">
</div>
<button id="addParam" class="btn btn-primary">+</button>
</div>`

})