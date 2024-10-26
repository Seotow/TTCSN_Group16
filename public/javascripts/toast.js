function toast({title, message, type, duration}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div')
        
        // remove after delay
        
        let removeOnClickId = setTimeout(() => {
                main.removeChild(toast)
        },duration + 1000)

        //  remove onclick
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(removeOnClickId)
            }
        }

        const icons = {
            success: 'fas fa-check',
            error: 'fas fa-times',
            warn: 'fas fa-exclamation',
            info: 'fas fa-info'

        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards `;
        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__content">
                    <h3 class="toast__header">${title}</h3>
                    <p class="toast__message">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div> 
        `;
        main.appendChild(toast);

        
    }
}

let showSuccessMessage = (message = 'Thành công') => {
    toast({
        title: 'Successsssss',
        message: message,
        type: 'success',
        duration: 1000
    })
};

let showWarnMessage = (message) => {
    toast({
        title: 'Warn',
        message: message,
        type: 'warn',
        duration: 3000
    })
};

let showErrorMessage = (message = 'Đang có lỗi vui lòng thử lại sau') => {
    toast({
        title: 'Error',
        message: message,
        type: 'error',
        duration: 3000
    })
};

let showInfoMessage = () => {
    toast({
        title: 'Info',
        message: 'Chức năng hiện chưa có',
        type: 'info',
        duration: 3000
    })
};