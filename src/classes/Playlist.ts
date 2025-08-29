import { Video } from "./Video.js";

export class Playlist {
  private _videos: Video[] = [];
  private _currentIndex: number = 0;

  get size(): number { return this._videos.length; }

  get currentIndex(): number { return this._currentIndex; }
  set currentIndex(idx: number) {
    if (this._videos.length == 0) { this._currentIndex = 0; return; }
    if (idx < 0 || idx >= this._videos.length) throw new Error("Erro: índice fora do intervalo");
    this._currentIndex = idx;
  }

  add(video: Video): void {
    this._videos.push(video);
    if (this._videos.length == 1) this._currentIndex = 0;
  }

  remove(id: string): boolean {
    const idx = this._videos.findIndex(v => v.id == id);
    if (idx < 0) return false;
    this._videos.splice(idx, 1);
    if (this._videos.length == 0) {
      this._currentIndex = 0;
    } else if (this._currentIndex >= this._videos.length) {
      this._currentIndex = this._videos.length - 1;
    }
    return true;
  }

  getCurrent(): Video | null | undefined {
    if (this._videos.length == 0) return null;
    return this._videos[this._currentIndex];
  }

  hasNext(): boolean {
    return this._videos.length > 0 && this._currentIndex < this._videos.length - 1;
  }

  hasPrevious(): boolean {
    return this._videos.length > 0 && this._currentIndex > 0;
  }
}