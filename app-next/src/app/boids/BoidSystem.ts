import randomHexColor, { cycle, randint } from "@/lib/hlpr";

type Point = { x: number; y: number };
type Style = { degree?: number; size?: number; fill?: string; stroke?: string; strokeWidth?: number };
type Boid = { pos: Point; render(): void; speed: number; style: Style };
type Theme = { bgColor: string; boidColor: string };

export default class BoidSystem {
  private renderer: Renderer;
  private isRunning = false;
  private pointer: { x: number; y: number };
  private boids: Array<Boid>;
  private te = 0;
  private tick = 0;

  private theme: Theme = { bgColor: "white", boidColor: "lightblue" };

  constructor(canvas: HTMLCanvasElement, theme = "light", boidsCount = 100) {
    this.renderer = new Renderer(canvas);
    this.resizeCanvas();
    this.pointer = { x: 0, y: 0 };
    if (theme == "dark") {
      this.theme.bgColor = "#0a0a0a";
      this.theme.boidColor = "#333";
    }
    this.boids = Array.from({ length: boidsCount }).map(() => this.createBoid());

    // moving boid to out of the screen initially
    this.boids.forEach((boid) => this.translateBoidBy(boid, Math.max(canvas.width, canvas.height), true));

    window.addEventListener("resize", () => this.resizeCanvas());
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (e) => {
      console.log(e.matches);
      this.theme.bgColor = e.matches ? "#0a0a0a" : "#ffffff";
    });
  }

  resizeCanvas(width?: number, height?: number) {
    width = width || window.innerWidth - 2;
    height = height || window.innerHeight - 2;

    this.renderer.canvas.height = height;
    this.renderer.canvas.width = width;
  }

  start() {
    this.isRunning = true;
    this.tickFrame();
  }

  stop() {
    this.isRunning = false;
  }

  createBoid() {
    const renderer = this.renderer;
    const canvas = renderer.canvas;
    return {
      pos: { x: randint(0, canvas.width), y: randint(0, canvas.height) },
      style: { degree: randint(0, 360), size: 20, fill: randomHexColor(), strokeWidth: 0 } as Style,
      speed: randint(1, 40),
      render() {
        renderer.drawTriangle(this.pos, this.style);
      },
    };
  }

  // Private Methods

  private setTick(te = 0) {
    const tick = te - this.te;
    this.te = te;
    this.tick = tick;
  }

  private tickFrame(te = 0) {
    this.setTick(te);
    if (!this.isRunning) return;
    window.requestAnimationFrame((t) => this.tickFrame(t));

    // compute boids behavior
    this.computeBoids();
    // render in the end
    this.renderFrame();
  }

  private computeBoids() {
    this.seperation();
    this.alignment();
    this.cohesion();

    this.moveBoids();
  }

  private seperation() {}
  private alignment() {}
  private cohesion() {}

  private moveBoids() {
    this.boids.forEach((boid) => {
      const ds = boid.speed * this.tick * 0.001;
      this.translateBoidBy(boid, ds);
    });
  }

  private translateBoidBy(boid: Boid, ds: number, noCycle = false) {
    const { degree = 0 } = boid.style;
    const dx = Math.cos(degree * (Math.PI / 180)) * ds;
    const dy = Math.sin(degree * (Math.PI / 180)) * ds;

    boid.pos.x += dx;
    boid.pos.y -= dy;

    if (noCycle) return;
    boid.pos.x = cycle(-2 * boid.style.size!, this.renderer.canvas.width + 2 * boid.style.size!, boid.pos.x);
    boid.pos.y = cycle(-2 * boid.style.size!, this.renderer.canvas.height + 2 * boid.style.size!, boid.pos.y);
  }

  private renderFrame() {
    this.renderer.clearScreen(this.theme.bgColor);
    this.boids.forEach((boid) => boid.render());
    // this.renderer.drawTriangle({ x: 100, y: 100 }, { size: 50, degree: 90 });
  }
}

class Renderer {
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
  }

  clearScreen(bgColor = "white") {
    this.ctx.save();
    this.ctx.fillStyle = bgColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();
  }

  drawTriangle(pos: Point, style: Style) {
    const ctx = this.ctx;
    const { x, y } = pos;
    const { degree = 0, size = 20, fill = "lightblue", stroke = "blue", strokeWidth = 2 } = style;

    const angleRad = ((90 - degree) * Math.PI) / 180;
    ctx.save(); // Save current context state
    ctx.translate(x, y); // Move origin to (x, y)
    ctx.rotate(angleRad); // Rotate context

    ctx.beginPath();
    const height = (size * Math.sqrt(3)) / 2;
    ctx.moveTo(0, -height / 2); // Top point
    ctx.lineTo(-size / 2 + size * 0.15, height / 2); // Bottom left
    ctx.lineTo(size / 2 - size * 0.15, height / 2); // Bottom right
    ctx.closePath();

    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = strokeWidth;
    ctx.fill();
    if (strokeWidth > 0) ctx.stroke();

    ctx.restore(); // Restore context to original state
  }
}
