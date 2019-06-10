function fontTooltip(showTooltip=false, unit='px') {
  if ( !showTooltip ) return;
  const textBlocks = document.querySelectorAll('.js-font-tooltip');

  function addTooltip() {
    const computedStyle = window.getComputedStyle(this);
    const blockProperties = this.getBoundingClientRect();
    let fontSize = computedStyle.getPropertyValue('font-size');
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const tooltip = document.createElement('div');
    const tooltipLeftPos = ( blockProperties.x + blockProperties.width / 2 );
    let oppositePos;

    if ( unit == 'pt' ) fontSize = `${parseFloat(fontSize) * 0.75}pt`;

    tooltip.classList.add('tooltip');
    tooltip.innerHTML = `
      Font Family: <strong>${fontFamily}</strong><br />
      Font Size: <strong>${fontSize}</strong>
    `;

    this.style.position = 'relative';
    document.body.appendChild(tooltip);

    oppositePos = ( blockProperties.y < tooltip.offsetHeight );

    tooltip.style.left = tooltipLeftPos + 'px';
    if ( oppositePos ) {
      tooltip.style.top = (blockProperties.y + blockProperties.height + 5) + 'px';
      tooltip.classList.add('tooltip--opposite');
    } else {
      tooltip.style.top = (blockProperties.y - tooltip.offsetHeight - 5) + 'px';
      tooltip.classList.remove('tooltip--opposite');
    } 
  }

  function removeTooltip() {
    const tooltip = document.querySelector('.tooltip');
    document.body.removeChild(tooltip);
  }

  textBlocks.forEach(textBlock => {
    textBlock.addEventListener('mouseenter', addTooltip);
    textBlock.addEventListener('mouseleave', removeTooltip);
  });
}