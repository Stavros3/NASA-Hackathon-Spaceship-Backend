# ASTRA-MED AI — Synthetic JSON Datasets

**All records in this package are fictional.** They are generated for a NASA Space Apps demonstration and are **not** NASA astronaut medical data, real spacecraft telemetry, clinical thresholds, or medical advice.

## Use these files

| File | Purpose |
|---|---|
| `crew_profiles.json` | 4 fictional astronaut profiles (IDs `2445`–`2448`) |
| `baselines.json` | Fictional personal reference values; **not medically validated** |
| `heart_rate.json` | 7 days of hourly heart rates, with exercise/deviation/sensor scenarios |
| `respiratory_rate.json` | 7 days of hourly breathing rates |
| `spo2.json` | 7 days of hourly SpO₂ readings, with missing-value scenario |
| `skin_temperature.json` | 7 days of hourly **skin** temperature (not core body temperature) |
| `observations_all.json` | Convenience combined view of the four vital-sign datasets |
| `blood_pressure_checkins.json` | Fictional daily manual blood pressure checks |
| `sleep.json` | Fictional sleep-session durations and restfulness |
| `activity.json` | Fictional work, exercise and rest windows |
| `symptom_checkins.json` | Self-reported fatigue, mood and symptoms (fictional) |
| `cabin_environment.json` | **Synthetic** CO₂, cabin air temperature and relative humidity |
| `manual_observations.json` | Manual entry 23 bpm and later repeat reading |
| `alerts.json` | Example deterministic-rule alerts and evidence IDs |
| `doctor_notes.json` | Fictional Earth medical notes |
| `medical_actions.json` | Fictional crew actions linked to alerts |
| `outcomes.json` | Fictional recorded outcomes, not diagnoses |
| `demo_report_fixtures.json` | **Prewritten** example reports, **not actual DeepSeek output** |
| `demo_scenarios.json` | 5 scripted demonstration scenarios |
| `sync_event_fixtures.json` | Sample pending events to exercise synchronization |
| `manifest.json` | Inventory and dataset disclosure metadata |

### Recommended import order

1. `crew_profiles.json`
2. `baselines.json`
3. **EITHER** `observations_all.json` **OR** the four individual vital-sign files (NOT both)
4. `sleep.json`, `activity.json`, `symptom_checkins.json`, `blood_pressure_checkins.json`
5. `cabin_environment.json`, `manual_observations.json`
6. `alerts.json`, `doctor_notes.json`, `medical_actions.json`, `outcomes.json`
7. `demo_report_fixtures.json`, `demo_scenarios.json`, `sync_event_fixtures.json`

All `.json` files contain JSON arrays of row objects, except `manifest.json` (an object). All identifiers and cross-file references are stable. Time fields are UTC ISO-8601 strings. Nullable `value` means **missing** rather than zero. Do not automatically assign alerts clinical significance; these are demo scenarios.

### NASA radiation integration — REAL dataset only

Radiation is **deliberately not fabricated or bundled**. Load a real NASA RadLab API response into your own radiation table, preserving the instrument name, original timestamp, units and source URL. Keep a separate `origin_dataset`/`is_synthetic=false` flag for verified imported records. Before labeling imported values as real NASA data, actually download them and check the response and its units. API documentation: https://visualization.osdr.nasa.gov/radlab/gui/data-api/

Radiation from an ISS-area sensor is not automatically an astronaut's individual dose, and historical NASA radiation observations are not measurements from the fictional crew.

### Two backend instances / four repos

- **Ship backend**: import profiles, baselines, vital-signs, sleep/activity/check-ins, rules and environment. It generates live events and AI prompts.
- **Earth backend**: import crew profiles only initially. Receive actual events over your sync API rather than pre-populating all ship data. Create doctor notes on Earth and sync those toward ship.
- `sync_event_fixtures.json` is a sample payload set for testing; do not use it as proof that synchronization has actually occurred.
- In your **simulated blackout**, prevent only ship↔Earth synchronization. Cloud DeepSeek can still work through the demo internet connection. Tell judges this mode is simulated, not actual physical offline operation.

### Included demonstration incidents

1. **Normal exercise**: `2447`, Nov 12 15:00 UTC — raised HR with exercise context.
2. **Manual input verification**: `2445`, Nov 14 09:00 UTC — suspicious manually entered 23 bpm, followed by a repeat fictional value.
3. **Disconnected sensor**: `2448`, Nov 13 08:00–10:00 UTC — missing HR and SpO₂ values.
4. **Persistent resting trend**: `2446`, Nov 14 05:00–10:00 UTC — fictional HR departure from a personal demo baseline and shorter sleep.
5. **CO₂ trend**: Nov 13 16:00–19:00 UTC — cabin environmental variation; no causal medical conclusion.

These files are safe to alter to fit your project's database schemas. Cite real NASA data separately and clearly label every synthetic row.
