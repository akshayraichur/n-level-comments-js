const addNewComment = (e) => {
  // get the parent node
  const parentNode = e.target.parentNode;
  // get the input value from sibling input elm.
  const inputValue = parentNode.querySelector('.comment-input').value.trim();

  if (inputValue === '') {
    return;
  }

  // remove contents from parent node
  parentNode.innerHTML = ``;

  // add a template of comment and reply btn
  const addCommentTemplate = document.querySelector('#add-new-comment');
  parentNode.appendChild(addCommentTemplate.content.cloneNode(true));

  const commentElm = parentNode.querySelector('.comment-content');
  commentElm.textContent = inputValue;
};

const addReply = (e) => {
  const parentNode = e.target.parentNode;

  const nestedCommentTemplate = document.querySelector(
    '#nested-comment-template'
  );
  const nestedCommentContainer = document.createElement('div');
  nestedCommentContainer.classList.add('nested-comment');
  nestedCommentContainer.appendChild(
    nestedCommentTemplate.content.cloneNode(true)
  );

  parentNode.appendChild(nestedCommentContainer);
};

const addNewCommentSection = (e) => {
  let inputValue = e.target.previousElementSibling;
  inputValue = inputValue.value.trim();

  if (inputValue === '') {
    return;
  }
  const newCommentSection = document.createElement('div');
  newCommentSection.classList.add('comment-container');

  const comment = document.createElement('div');
  comment.classList.add('comment');

  const commentSectionTemplate = document.querySelector(
    '#nested-comment-template'
  );
  comment.appendChild(commentSectionTemplate.content.cloneNode(true));

  newCommentSection.appendChild(comment);

  // get the parent of parent node
  const parentNode = e.target.parentNode.parentNode.parentNode;
  parentNode.appendChild(newCommentSection);
};

const handleClickListener = (e) => {
  if (
    e.target.classList.contains('add-comment-btn') &&
    e.target?.parentNode?.classList?.contains('comment')
  ) {
    addNewCommentSection(e);
  }

  if (e.target.classList.contains('add-comment-btn')) {
    addNewComment(e);
  }

  if (e.target.classList.contains('nested-comment-btn')) {
    addReply(e);
  }
};

document.addEventListener('click', handleClickListener);
