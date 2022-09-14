const handleScroll = (signus, container) => {
    const start = container.scrollLeft;
    container.scrollTo(start+500*signus,0);
}

export default handleScroll;