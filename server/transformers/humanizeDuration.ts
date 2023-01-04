function humanizeDuration(time: Date) {
    const duration = new Date().getTime() - new Date(time).getTime();
    const seconds = Math.floor(duration / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    if (seconds < 60) {
        return seconds + "秒前";
    }
    if (minutes < 60) {
        return minutes + "分鐘前";
    }
    if (hours < 24) {
        return hours + "小時前";
    }
    if (days < 30) {
        return days + "天前";
    }
    if (months < 12) {
        return months + "個月前";
    }
    return years + "年前";
}
export default humanizeDuration;
