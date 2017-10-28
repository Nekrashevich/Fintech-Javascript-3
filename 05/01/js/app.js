let map = document.querySelector('.tag-map'),
    input = document.querySelector('.tag-input'),
    _fcity = document.querySelector('.fcity'),
    _alert = document.querySelector('#alert-desc'),
    _desc = document.querySelector('#alert');

function create(tagValue) {
  
  let _tag = document.createElement('div'),
      _text = document.createElement('span'),
      _grad = document.createElement('div'),
      _del = document.createElement('button');
  
  // Add title to del-button and text to tag-text
  _text.textContent = tagValue;
  _del.title = "Удалить";
  
  // Add class to new element
  _tag.classList.add('tag');  
  _text.classList.add('tag-text');
  _grad.classList.add('tag-grad');
  _del.classList.add('tag-del');
  
  // Add child-dependencies to new tag
  _tag.appendChild(_text);  
  _tag.appendChild(_grad);  
  _tag.appendChild(_del);

  return _tag;
};

function _keydown(evt){
  const enter_code = 13;        
  let tags = document.querySelectorAll('.tag');
  
  if (evt.keyCode !== enter_code || input.value.trim().length === 0) 
    return;  
  else {
    map.insertBefore(create(input.value), input);
    input.value = '';
    input.placeholder='';
  } 
}

function _remove(evt){
  evt.preventDefault();
  if (evt.target.tagName !== 'BUTTON') {
    return;
  }
  map.removeChild(evt.target.parentNode);
  let tags = document.querySelectorAll('.tag');
  if (tags.length==0) input.placeholder='Любые покупки';
}

function _catch() {
  const reg = _fcity.value.match(/^[^a-zA-Z]*$/);

  if (!reg) {
    _fcity.parentNode.classList.add('catch');   
    _alert.classList.add('catch');
    _desc.classList.add('catch');
    
  } else {
    _fcity.parentNode.classList.remove('catch');    
    _alert.classList.remove('catch');
    _desc.classList.remove('catch');
  }
}

input.addEventListener('keydown', _keydown);

map.addEventListener('click', _remove);

_fcity.addEventListener('input', _catch);