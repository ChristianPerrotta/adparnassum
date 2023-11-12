export function fromInterval(pitch, interval) {
    // pitch comes in absolute form
    const scale = ["c", "d", "e", "f", "g", "a", "b"];

    let octave = Number(pitch[2]);

    let baseIndex = scale.indexOf(pitch[0]);
    let newIndex = baseIndex + interval - 1;

    if (newIndex > 6) {
        newIndex = newIndex - 7
        octave += 1 
    }
    let newPitch = scale[newIndex] + "/" + octave;

    return newPitch
}