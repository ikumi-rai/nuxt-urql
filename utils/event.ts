export class Debouncer {
  private timerId?: NodeJS.Timeout

  constructor(private delay: number) {}

  debounce(callback: () => void | Promise<void>) {
    this.cancel()
    this.timerId = setTimeout(async () => {
      await callback()
      this.timerId = undefined
    }, this.delay)
  }

  cancel() {
    if (this.timerId) clearTimeout(this.timerId)
  }
}
