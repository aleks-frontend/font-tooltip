function fontTooltip(showTooltip=false) {
  if ( !showTooltip ) return;
  const textBlocks = document.querySelectorAll('.js-font-tooltip');
  textBlocks.forEach(textBlock => {
    const style = window.getComputedStyle(textBlock);
    const fontSize = style.getPropertyValue('font-size');
    const fontFamily = style.getPropertyValue('font-family');
    const tooltip = document.createElement('div');

    tooltip.classList.add('tooltip');
    tooltip.innerHTML = `
Font Family: <strong>${fontFamily}</strong><br />
Font Size: <strong>${fontSize}</strong>
`;

    textBlock.style.position = 'relative';
    textBlock.appendChild(tooltip);
  });
}