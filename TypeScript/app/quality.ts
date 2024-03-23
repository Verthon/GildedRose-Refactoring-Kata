export class Quality {
  private quality: number;
  private readonly minQuality: 0;
  private readonly maxQuality: 50;

  constructor(quality: number) {
    this.quality = quality;
    this.minQuality = 0;
    this.maxQuality = 50;
  }

  get currentQuality() {
    return this.quality;
  }

  public incrementBy = (incrementBy: number) => {
    const incrementedValue = this.quality + incrementBy;

    this.quality = Math.min(incrementedValue, this.maxQuality);
  };

  public decrementBy = (decrementBy: number) => {
    const decrementedValue = this.quality - decrementBy;

    this.quality = Math.max(decrementedValue, this.minQuality);
  };

  public setToZero = () => {
    this.quality = 0;
  };
}