export const insertSiblingAfter = (newNode, refNode) => {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
};