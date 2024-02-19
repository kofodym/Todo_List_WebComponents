class Progress extends HTMLElement {
  // component implementation goes here
  updateProgressBar() {
    const progressBar = this.shadowRoot.getElementById("progressBar");
    const totalTasks = this.tasks.length;
    const completedTasks = this.tasks.filter((task) => task.completed).length;
    const completionPercentage = (completedTasks / totalTasks) * 100 || 0;

    progressBar.style.width = `${completionPercentage}%`;
  }
  addTask() {
    // ... (Your existing addTask method)

    // Update the progress bar
    this.updateProgressBar();
  }

  removeTask(index) {
    // ... (Your existing removeTask method)

    // Update the progress bar
    this.updateProgressBar();
  }

  render() {
    // ... (Your existing render method)

    // Update the progress bar
    this.updateProgressBar();
  }
}

customElements.define("progress-bar", Progress);
