import * as PoweredUP from "./index-node";
import { Hub } from "./index-node";

const poweredUP = new PoweredUP.PoweredUP();

// let n = 0;
// setInterval(() => {
//   ++n;
//   const m = n;
//   console.log(m);
//   for (let m = 0; m <= 1000000000; m++) {
//     const y = m * m;
//   }
//   console.log(m, "done");
// }, 10);

const hubs: Hub[] = [];
const otherHubs: Hub[] = [];

poweredUP.on("discover", async (hub: Hub) => {
  console.log(`Discovered ${hub.name}!`);

  if(hub.name !== 'Passenger' && hub.name !== 'Toby') {
    await hub.connect();
    otherHubs.push(hub);

    const led = (await hub.waitForDeviceByType(PoweredUP.Consts.DeviceType.HUB_LED)) as PoweredUP.HubLED;

    const sensor = (await hub.waitForDeviceAtPort(
      "A"
    )) as PoweredUP.ColorDistanceSensor;

    sensor.on('distance', (distance) => console.log(distance))

    const currentSensor = (await hub.waitForDeviceByType(PoweredUP.Consts.DeviceType.CURRENT_SENSOR)) as PoweredUP.CurrentSensor;
    currentSensor.on("current", (current:any) => {
      // do nothing
    });

    const voltageSensor = (await hub.waitForDeviceByType(PoweredUP.Consts.DeviceType.VOLTAGE_SENSOR)) as PoweredUP.VoltageSensor;
    voltageSensor.on("voltage", (voltage:any) => {
      // do nothing
    });

    // hub.on("attach", async (device: PoweredUP.Device) => console.log('attach', device));
    // hub.on("detach", async (device: PoweredUP.Device) => console.log('detach', device));

    await led.setRGB(255,255,0);
    poweredUP.scan().then(value => console.log("here2", value));
    return;
  }

  await hub.connect();

  const currentSensor = (await hub.waitForDeviceByType(PoweredUP.Consts.DeviceType.CURRENT_SENSOR)) as PoweredUP.CurrentSensor;
  currentSensor.on("current", (current:any) => {
    // do nothing
  });

  const voltageSensor = (await hub.waitForDeviceByType(PoweredUP.Consts.DeviceType.VOLTAGE_SENSOR)) as PoweredUP.VoltageSensor;
  voltageSensor.on("voltage", (voltage:any) => {
    // do nothing
  });

  // hub.on("attach", async (device: PoweredUP.Device) => console.log('attach', device));
  // hub.on("detach", async (device: PoweredUP.Device) => console.log('detach', device));

  const led = (await hub.waitForDeviceByType(PoweredUP.Consts.DeviceType.HUB_LED)) as PoweredUP.HubLED;
  await led.setRGB(255,255,0);


  console.log(`Connected to ${hub.name}`);

  hubs.push(hub);

  if(hubs.length === 1) {
  poweredUP.scan().then(value => console.log("here2", value));
    return;
  }
    await hub.sleep(10000);

   const trainMotor1 = (await hubs[0].waitForDeviceAtPort(
     "A"
   )) as PoweredUP.TrainMotor;
   const trainMotor2 = (await hubs[1].waitForDeviceAtPort(
     "A"
   )) as PoweredUP.TrainMotor;

  // console.log("Have train motor");


    const p1 = trainMotor1.rampPower(0, 50, 3000);
    await hub.sleep(1000);
    const p2 = trainMotor2.rampPower(0, 50, 3000);
  // // ok
  await Promise.all([
    p1,p2
  ])

    const p3 = trainMotor1.rampPower(50, 0, 3000);
    await hub.sleep(1000);
    const p4 = trainMotor2.rampPower(50, 0, 3000);
  await Promise.all([
    p3,p4
  ])

  console.log('done');

  // // not ok?
  // await trainMotor.rampPower(50, 0, 500);
  // // await trainMotor.rampPower(100, 0, 100);
});

poweredUP.scan().then(value => console.log("here", value));
console.log("Scanning for Hubs...");
