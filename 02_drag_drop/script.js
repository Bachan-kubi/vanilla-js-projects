const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll('.dragable');
const list = document.querySelector('ul');
console.dir(Object.getPrototypeOf(list));

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

containers.forEach(container=>{
    console.dir(container);
    container.addEventListener("dragover",(e)=>{
        e.preventDefault();
        const getAfterElement = getDragElement(container, e.clientY);
        console.log(getAfterElement);
        const dragable = document.querySelector('.dragging');
        if(getAfterElement == null){
            container.appendChild(dragable);
        } else {
            container.insertBefore(dragable, getAfterElement);
        }
        
    });
});

function getDragElement(container,y){
    const graggableElements = [...container.querySelectorAll('.dragable:not(.dragging)')];
    return graggableElements.reduce((closest, child)=>{
        const box = child.getBoundingClientRect();
        const offset = y -box.top -box.height/2;
        if(offset<0 && offset>closest.offset){
            return {offset: offset, element: child};
        }
        return closest;
    }, {offset: Number.NEGATIVE_INFINITY}).element;
};
