function fontTooltip(showTooltip=false, unit='px') {
  if ( !showTooltip ) return;
  const textBlocks = document.querySelectorAll('.js-font-tooltip');
  textBlocks.forEach(textBlock => {
    const style = window.getComputedStyle(textBlock);
    let fontSize = style.getPropertyValue('font-size');
    const fontFamily = style.getPropertyValue('font-family');
    const tooltip = document.createElement('div');

    if ( unit == 'pt' ) fontSize = `${parseFloat(fontSize) * 0.75}pt`;

    tooltip.classList.add('tooltip');
    tooltip.innerHTML = `
Font Family: <strong>${fontFamily}</strong><br />
Font Size: <strong>${fontSize}</strong>
`;

    textBlock.style.position = 'relative';
    textBlock.appendChild(tooltip);
  });
}