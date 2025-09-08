const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll('.dragable');
console.log(draggables);

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

containers.forEach(container=>{
    container.addEventListener("dragover",(e)=>{
        
        e.preventDefault();
        console.log(e);
        const getAfterElement = getDragElement(container, e.clientY);
        const dragable = document.querySelector('.dragging');
        container.appendChild(dragable);
    });
});

function getDragElement(container,y){
    const graggableElements = [...container.querySelectorAll('.dragable:not(.dragging)')];
    graggableElements.reduce((closest, child)=>{
        console.log(closest, child);
    }, {offset: Number.POSITIVE_INFINITY})
};
