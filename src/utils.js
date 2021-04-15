// Create new row
export const row = (content = 'No Content', styles = '') =>
  `<div class="row" style="margin: 0; ${styles}">${content}</div>`;
// ----->

// Create new column
export const col = (content = 'No Content') =>
  `<div class="col-sm">${content}</div>`;
// ----->

// Process CSS for syntax purposes
export const css = (styles = {}) =>
  Object.keys(styles)
    .map((styleKey) => `${styleKey}: ${styles[styleKey]}`)
    .join(';');
// ----->

// Create form block for adding text/title and styles to both of them respectively
export const block = (type = 'No Type') => {
  let formBlock = `<form name="${type}">
                    <h5>${type}</h5>
                      <div class="form-group">`;

  const inputField = `<input class="form-control form-control-sm columns" name="value" placeholder="value">`;

  if (type === 'column') {
    formBlock += inputField + inputField + inputField;
  } else {
    formBlock += inputField;
  }

  formBlock += `</div>
    <div class="form-group">
      <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Add</button>
  </form>
  <hr />`;

  return formBlock;
};
// ----->
