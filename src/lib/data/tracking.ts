// Mock tracking data
export const trackingData: Record<string, any> = {
	'BNK123456': {
		code: 'BNK123456',
		status: 'In Transit',
		origin: 'Los Angeles, CA',
		destination: 'New York, NY',
		estimatedDelivery: '2025-12-15',
		currentLocation: 'Chicago, IL',
		service: 'Air Shipping',
		weight: '45 kg',
		dimensions: '120x80x60 cm',
		timeline: [
			{
				date: '2025-12-08 10:30',
				location: 'Los Angeles, CA',
				status: 'Package picked up',
				completed: true
			},
			{
				date: '2025-12-08 15:45',
				location: 'Los Angeles Hub',
				status: 'Departed from origin facility',
				completed: true
			},
			{
				date: '2025-12-09 08:20',
				location: 'Chicago, IL',
				status: 'Arrived at sorting facility',
				completed: true
			},
			{
				date: '2025-12-09 14:00',
				location: 'Chicago, IL',
				status: 'In transit to destination',
				completed: false
			},
			{
				date: '2025-12-15 09:00',
				location: 'New York, NY',
				status: 'Out for delivery',
				completed: false
			}
		]
	},
	'BNK789012': {
		code: 'BNK789012',
		status: 'Delivered',
		origin: 'San Francisco, CA',
		destination: 'Miami, FL',
		estimatedDelivery: '2025-12-05',
		currentLocation: 'Miami, FL',
		service: 'Sea Shipping',
		weight: '120 kg',
		dimensions: '200x150x100 cm',
		timeline: [
			{
				date: '2025-11-20 09:00',
				location: 'San Francisco, CA',
				status: 'Package picked up',
				completed: true
			},
			{
				date: '2025-11-21 14:30',
				location: 'San Francisco Port',
				status: 'Loaded onto vessel',
				completed: true
			},
			{
				date: '2025-12-01 08:00',
				location: 'Panama Canal',
				status: 'In transit',
				completed: true
			},
			{
				date: '2025-12-04 16:45',
				location: 'Miami Port',
				status: 'Arrived at destination port',
				completed: true
			},
			{
				date: '2025-12-05 11:20',
				location: 'Miami, FL',
				status: 'Delivered',
				completed: true
			}
		]
	},
	'BNK345678': {
		code: 'BNK345678',
		status: 'Processing',
		origin: 'Seattle, WA',
		destination: 'Boston, MA',
		estimatedDelivery: '2025-12-18',
		currentLocation: 'Seattle, WA',
		service: 'Train Shipping',
		weight: '85 kg',
		dimensions: '150x120x80 cm',
		timeline: [
			{
				date: '2025-12-09 07:15',
				location: 'Seattle, WA',
				status: 'Package received at facility',
				completed: true
			},
			{
				date: '2025-12-09 12:00',
				location: 'Seattle, WA',
				status: 'Processing',
				completed: false
			}
		]
	}
};
